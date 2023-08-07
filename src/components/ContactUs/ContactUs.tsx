import styles from './ContactUs.module.scss'
import ContactCentre from '../../assets/img/contact-us.jpg'
import ContactForm from '../ContactForm/ContactForm'

const ContactUs = () => {
  return (
    <section className='container'>
      <h2>Contact Us</h2>
      <div className={styles.contact}>
        <div className={styles.image}>
          <img src={ContactCentre} alt="Contact Centre" />
        </div>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactUs