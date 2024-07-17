import React from 'react'
import styles from './form.module.scss';
import BrandLogo from '../../../../components/shared/brand';
// import { Icon } from '@iconify/react';
import Input from '../../../../components/atoms/input';
import Button from '../../../../components/atoms/button';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  return (
    <section className={styles["form-container"]}>
      <BrandLogo />
      <div className={styles.form}>
        <Button text={'Join With Google'} icon={'ri:google-fill'} />
        <div className={styles.option}><span>Or Join With Email</span></div>
        <article>
          <Input type={'email'} value={email} placeholder={'Enter Email'} onChange={(e) => setEmail(e.target.value)} />
          <Input type={'password'} value={password} placeholder={'Enter Password'} onChange={(e) => setPassword(e.target.value)} />

          <Button
            text={'Join With Email'}
            icon={'material-symbols:login'}
            className={styles.emailBtn} 
            handleClick={()=> navigate("/notes")}
          />
        </article>
      </div>
    </section>
  )
}

export default Form
