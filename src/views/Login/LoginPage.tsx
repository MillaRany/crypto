import { ErrorMessage, Field, Form, Formik } from 'formik';
import classes from "../Login/LoginPage.module.css"
import logo from "../../asset/logo-crypto.svg"
import logoGoogle from "../../asset/google.svg"
import logoMicrosoft from "../../asset/microsoft.svg"
import { useState } from 'react';


function LoginPage() {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)
    const handleClick = () => setIsVisiblePassword(!isVisiblePassword)

    interface values {
        email: string,
        password: string
    }


    return (<>
        <main className={classes.main} >
            <section className={classes.sectionMain}>
                <div className={classes.divLayout}>
                    <div className={classes.divLogo}>
                        <img src={logo} />
                    </div>
                    <div className={classes.divForm}>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values)
                                resetForm();
                            }}>
                            {({
                                values,
                                errors,
                                touched,
                                handleSubmit,
                                handleChange
                            }) => (
                                <Form onSubmit={handleSubmit} className={classes.form}>
                                    <h2>Login</h2>
                                    <Field
                                        className={classes.input}
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder='Endereço de email'
                                    />
                                    {
                                        errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                        ) : null
                                    }
                                    <ErrorMessage name='email' />
                                    <div className={classes.inputPassword}>
                                        <input
                                            className={classes.input}
                                            type={isVisiblePassword ? "text" : "password"}
                                            name="password"
                                            value={values.password}
                                            placeholder='Senha'
                                            onChange={handleChange}
                                        />
                                        {isVisiblePassword ? <span onClick={handleClick} className={classes.invisiblePassword} /> : <span onClick={handleClick} className={classes.visiblePassword} />}
                                    </div>
                                    <a href="#">Esqueceu sua senha?</a>
                                    <div className={classes.divButton}>
                                        <button>
                                            Entrar
                                        </button>
                                    </div>
                                    <div className={classes.divNewUser}>
                                        <p>Novo usuário? <a href='#'> Criar Conta</a> </p>
                                    </div>
                                </Form>
                            )}
                        </Formik>

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

