// import React from "react";

// const AboutPage = () => {
//   return (
//     <div style={{ padding: "40px", fontFamily: 'Assistant, sans-serif' }}>
//       <h1 style={{ color: "#f3cc00" }}>אודות</h1>
//       <p>ברוכים הבאים לאתר שלנו! כאן תוכלו לקרוא עוד עלינו, על החזון, המוצרים והשירות שלנו.</p>
//     </div>
//   );
// };

// export default AboutPage;


import React from "react";
// import "./AboutPage.css";
import "../styles/About.css"
const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Noizz</h1>
        <p>אודותינו-מובילים בסטייל, שירות וחוויה.</p>
      </div>

      <div className="about-content">
        <h2>מי אנחנו?</h2>
        <p>
          אנחנו ב־<strong>id·us</strong> מאמינים ששופינג זו חוויה שצריכה להיות מדויקת, אלגנטית ונגישה לכולם.
          אצלנו תמצאו את מיטב המוצרים, עם שירות לקוחות ברמה הגבוהה ביותר, משלוחים מהירים
          וממשק קנייה נעים וברור.
        </p>

        <h2>החזון שלנו</h2>
        <p>
          להפוך את חוויית הקנייה אונליין למרגשת, יעילה ומהנה – דרך חדשנות, הקשבה ללקוח ועיצוב מוקפד.
        </p>

        <h2>למה לבחור בנו?</h2>
        <ul>
          <li>✅ משלוחים מהירים לכל הארץ</li>
          <li>✅ שירות לקוחות אנושי וזמין</li>
          <li>✅ איכות ללא פשרות</li>
          <li>✅ מבצעים משתלמים לאורך כל השנה</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
