import { Grid, TextField, Typography } from "@mui/material";

export const LoginPage = () => {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={0}
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid item
            className='box-shadow'
            xs={3}
            sx={{backgroundColor:'white', padding:3, borderRadius:2}}
            >
                <Typography variant="h5" sx={{ mb: 1}}>Login</Typography>

                <form>
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField type="email" placeholder="correo@goo.com" label="Correo"/>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField type="password" placeholder="Contraseña" label="Contraseña"/>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
};
