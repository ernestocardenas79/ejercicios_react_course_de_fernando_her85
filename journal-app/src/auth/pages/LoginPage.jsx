import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form>
                <Grid container direction="column">
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="email"
                            placeholder="correo@goo.com"
                            label="Correo"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="password"
                            placeholder="Contraseña"
                            label="Contraseña"
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="end">
                    <Link
                        color="inherit"
                        to="/auth/register"
                        component={RouterLink}
                    >
                        Crea una cuenta
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    );
};
