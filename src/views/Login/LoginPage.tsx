import { useFormik } from 'formik';
import classes from "../Login/LoginPage.module.css"
import logo from "../../asset/logo-crypto.svg"
import logoGoogle from "../../asset/google.svg"
import logoMicrosoft from "../../asset/microsoft.svg"
import invisiblePassword from "../../asset/invisiblePassword.svg"
import visiblePassword from "../../asset/visiblePassword.svg"
import { useState } from 'react';


function LoginPage() {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)

    const handleClick = () => setIsVisiblePassword(!isVisiblePassword);




    return (<>
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
                            >
                                <img src={visiblePassword}/>
                            </input>
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
                    <div className={classes.loginOptions}>
                        <h2> ou faça o login com </h2>
                    </div>

                    <div className={classes.buttonsOptionsLogin}>
                        <button><img src={logoGoogle} /></button>
                        <button><img src={logoMicrosoft} /></button>
                    </div>
                </div>
                <footer className={classes.footer}>
                    <p><a href='#'>FAQ</a></p>
                    <p>Powered by Transfero</p>
                </footer>
            </section>
        </main>

    </>
    )
}

export default LoginPage