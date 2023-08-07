import Button from '../Button/Button'
import styles from './ContactForm.module.scss'

const ContactForm = () => {
  return (
    <form className={styles.ContactForm}>
      <input type="text" placeholder='Name' />
      <input type="tel" placeholder='Phone number*' required />
      <input type="email" placeholder='E-mail*' required />
      <input type="text" placeholder='product/service' />
      <textarea placeholder='Message*' required></textarea>
      <p>By submitting an application you agree to the policy privacy</p>
      <Button name='send' />
    </form>
  )
}

export default ContactForm