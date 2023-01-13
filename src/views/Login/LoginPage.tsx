import { useFormik } from 'formik';
import classes from "../Login/LoginPage.module.css"
import logo from "../../asset/logo-crypto.svg"


function LoginPage() {
    return (
        <main className={classes.main} >
            <section className={classes.sectionMain}>
                <div className={classes.divLayout}>
                    <div className={classes.divLogo}>
                        <img src={logo} />
                    </div>
                    <div className={classes.divForm}>
                        <form className={classes.form}>
                            <h2>Login</h2>
                            <input
                                className={classes.input}
                                type="email"
                                name="email"
                                placeholder='Endereço de email'
                            />
                            <input
                                className={classes.input}
                                type="password"
                                name="password"
                                placeholder='Senha'
                            />
                            <a href="#">Esqueceu sua senha?</a>
                            <div className={classes.divButton}>
                                <button>
                                    Entrar
                                </button>
                            </div>
                            <div className={classes.divNewUser}>
                                <p>Novo usuário? <a href='#'> Criar Conta</a> </p>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginPage