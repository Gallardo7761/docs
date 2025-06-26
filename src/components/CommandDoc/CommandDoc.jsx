import styles from './CommandDoc.module.css';

const CommandDoc = ({ 
  name, 
  description, 
  usage, 
  aliases, 
  examples, 
  warning 
}) => (
  <div className={styles.commandContainer}>
    <h2 className={styles.sectionTitle}>Descripción</h2>
    <p className={styles.commandDescription}>{description}</p>

    <h2 className={styles.sectionTitle}>Uso</h2>
    <pre className={styles.codeBlock}>{usage}</pre>

    {aliases && aliases.length > 0 && (
      <span className={styles.aliases}>
        Alias: <code>{aliases.join(', ')}</code>
      </span>
    )}

    <h2 className={styles.sectionTitle}>Ejemplo</h2>
    {examples.map((example, idx) => (
      <pre key={idx} className={styles.codeBlock}>{example}</pre>
    ))}

    {warning && (
      <p className={styles.warning}>
        {warning}
      </p>
    )}
  </div>
);

export default CommandDoc;
