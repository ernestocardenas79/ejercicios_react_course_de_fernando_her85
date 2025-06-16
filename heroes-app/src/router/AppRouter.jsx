import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes/';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path="login"
                    element={
                        <PublicRoutes>
                            <LoginPage></LoginPage>
                        </PublicRoutes>
                    }
                />

                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <HeroesRoutes />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
};
