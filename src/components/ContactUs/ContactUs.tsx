import styles from './ContactUs.module.scss'
import ContactCentre from '../../assets/img/contact-us.webp'
import ContactForm from '../ContactForm/ContactForm'
import { motion as m } from "framer-motion"

const ContactUs = () => {
  return (
    <section className='container'>
      <m.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}>
        Contact Us
      </m.h2>
      <div className={styles.contact}>
        <m.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className={styles.image}>
          <img src={ContactCentre} alt="Contact Centre" />
        </m.div>
        <m.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
          className={styles.form}>
          <ContactForm />
        </m.div>
      </div>
    </section>
  )
}

export default ContactUs