import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from 'react-router-dom';

export const RegisterPage = () => {
    return (
        <AuthLayout title="Crear Cuenta">
            <form>
                <Grid container direction="column">
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            placeholder="Escribe tu nombre"
                            label="Nombre Completo"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="email"
                            placeholder="correo@goo.com"
                            label="Correo"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="password"
                            placeholder="Contraseña"
                            label="Contraseña"
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="end">
                    <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
                    <Link
                        color="inherit"
                        to="/auth/login"
                        component={RouterLink}
                    >
                        Ingresar
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    );
};
