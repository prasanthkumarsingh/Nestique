import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917816086291?text=Hi%20Nestique%20Studio%2C%20I%27m%20interested%20in%20your%20interior%20design%20%2F%20construction%20services.%20Can%20you%20please%20share%20more%20details%3F"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
      aria-label="Chat with Nestique Studio on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.004A9.994 9.994 0 0 0 2 12c0 1.77.46 3.45 1.33 4.94L2 22l5.18-1.32A9.98 9.98 0 0 0 12 22c5.52 0 10-4.48 10-10s-4.48-9.996-10-9.996Zm0 18.16c-1.47 0-2.91-.39-4.16-1.13l-.3-.18-3.08.78.82-3.01-.2-.31A8.13 8.13 0 0 1 3.86 12c0-4.48 3.66-8.13 8.14-8.13 4.48 0 8.14 3.65 8.14 8.13 0 4.48-3.66 8.13-8.14 8.13Zm4.47-6.13c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.12-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.28-.22.22-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.54.58.2 1.03.32 1.38.41.58.14 1.1.12 1.52.07.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      <span className={styles.label}>Chat with us</span>
    </a>
  );
}
