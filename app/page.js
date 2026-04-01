import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const scheduleItems = [
  { subtitle: 'Palm Sunday', image: '/PalmSunday.webp' },
  { subtitle: 'Holy Monday', image: '/HolyMaundy.webp' },
  { subtitle: 'Holy Tuesday', image: '/Holy Tuesday.webp' },
  { subtitle: 'Holy Wednesday', image: '/HolyWednesday.webp' },
  { subtitle: 'Maundy Thursday', image: '/MaundayThursday.webp' },
  { subtitle: 'Good Friday', image: '/GoodFriday.webp' },
  { subtitle: 'Sabado de Gloria', image: '/SabadoDeGloria.webp' },
  { subtitle: 'Easter Sunday', image: '/EasterSunday.webp' },
];

const apostles = [
  { name: "Bro. Manuel Quezon", image: "/Manuel.webp" },
  { name: "Bro. Cesar Bachar", image: "/Cesar.webp" },
  { name: "Bro. Ronie Dancel", image: "/Ronie.webp" },
  { name: "Bro. Virgilio Gregorio Jr.", image: "/Virgilio.webp" },
  { name: "Bro. Kenneth Antoquia", image: "/Kenneth.webp" },
  { name: "Bro. Mario Martin", image: "/Mario.webp" },
  { name: "Bro. Nick Guiritan", image: "/Nicomedes.webp" },
  { name: "Bro. Serafin Tomas", image: "/Seafin.webp" },
  { name: "Bro. Glenn Tadeo", image: "/Glenn.webp" },
  { name: "Bro. Roderick Aquino", image: "/Roderick.webp" },
  { name: "Bro. Nazer Patricio", image: "/Nazer.webp" },
  { name: "Bro. Frebert Jose", image: "/Frebert.webp" }
];

const activities = [
  { title: "Confession & Repentance", desc: "Experience God's mercy by going to confession and reflecting on your sins." },
  { title: "Visita Iglesia", desc: "Visit seven churches to pray before the Blessed Sacrament on Maundy Thursday." },
  { title: "Pray the Holy Rosary", desc: "Meditate on the sorrowful mysteries to walk with Mary through Christ’s passion." },
  { title: "Fasting & Abstinence", desc: "Offer your discomfort as a sacrifice, especially on Ash Wednesday and Good Friday." },
  { title: "Reflect on the Passion", desc: "Read the Gospel accounts of the Passion, entering into the depth of His sacrifice." },
  { title: "Stations of the Cross", desc: "Walk the 14 stations, physically or spiritually, meditating on Christ's final journey." },
  { title: "Forgive Others", desc: "Let go of grudges and extend the exact same forgiveness that Christ offers to us." },
  { title: "Acts of Charity", desc: "Give to the poor through Almsgiving, seeing the face of Jesus in those in need." },
  { title: "Silent Prayer", desc: "Spend dedicated time in silence, disconnecting from worldly noise to hear God’s voice." },
  { title: "Watch the Senakulo", desc: "Witness the live reenactment of Christ’s passion to intimately feel the weight of His love." }
];

export default function Page() {
  const [currentDateInfo, setCurrentDateInfo] = useState({
    month: '...',
    dayNum: '...',
    dayName: 'Loading season...',
    quote: '',
    verse: ''
  });

  useEffect(() => {
    const holyWeek2026 = {
      '2026-03-29': { name: 'Palm Sunday', quote: '“Blessed is he who comes in the name of the Lord!”', verse: 'Mark 11:9' },
      '2026-03-30': { name: 'Holy Monday', quote: '“Have faith in God.”', verse: 'Mark 11:22' },
      '2026-03-31': { name: 'Holy Tuesday', quote: '“You will know the truth, and the truth will set you free.”', verse: 'John 8:32' },
      '2026-04-01': { name: 'Holy Wednesday', quote: '“The Son of Man came… to give his life as a ransom for many.”', verse: 'Matthew 20:28' },
      '2026-04-02': { name: 'Maundy Thursday', quote: '“Love one another as I have loved you.”', verse: 'John 13:34' },
      '2026-04-03': { name: 'Good Friday', quote: '“It is finished.”', verse: 'John 19:30' },
      '2026-04-04': { name: 'Black Saturday', quote: '“Be still, and know that I am God.”', verse: 'Psalm 46:10' },
      '2026-04-05': { name: 'Easter Sunday', quote: '“He is not here; He has risen!”', verse: 'Luke 24:6' }
    };

    const now = new Date();
    // Use Philippines timezone if possible, fallback to local
    const isoDate = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().split('T')[0];

    const monthStr = now.toLocaleDateString('en-US', { month: 'long' });
    const dayStr = now.getDate().toString();

    if (holyWeek2026[isoDate]) {
      setCurrentDateInfo({
        month: monthStr,
        dayNum: dayStr,
        dayName: holyWeek2026[isoDate].name,
        quote: holyWeek2026[isoDate].quote,
        verse: holyWeek2026[isoDate].verse
      });
    } else {
      let currentSeason = 'Ordinary Time';
      if (now.getFullYear() === 2026) {
        if (isoDate > '2026-04-05' && isoDate < '2026-05-25') {
          currentSeason = 'Easter Season';
        } else if (isoDate >= '2026-02-18' && isoDate < '2026-03-29') {
          currentSeason = 'Lent Season';
        }
      }

      setCurrentDateInfo({
        month: monthStr,
        dayNum: dayStr,
        dayName: currentSeason,
        quote: '“Whatever you do, do it all for the glory of God.”',
        verse: '1 Corinthians 10:31'
      });
    }
  }, []);

  return (
    <>
      <div className="landing-wrapper">
        {/* Hero Section */}
        <section className="hero" id="home">
          <Image src="/logo.webp" alt="SJP2 Logo" className="hero-logo-img" width={200} height={200} priority />
          <h1>ST. JOHN PAUL II PARISH</h1>
          <p className="subtitle">Semana Santa 2026</p>
          <div className="bible-quote">
            <p>“For God loved the world in this way: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.”</p>
            <p className="quote-author">John 3:16</p>
          </div>
        </section>

        {/* Floating Date Card */}
        <div className="today-card-wrapper">
          <div className="today-card glass-panel">
            <div className="today-date">
              <span className="today-label">{currentDateInfo.month}</span>
              <span className="today-value">{currentDateInfo.dayNum}</span>
            </div>
            <div className="today-divider"></div>
            <div className="today-holyday">{currentDateInfo.dayName}</div>
            <div className="today-divider"></div>
            <div className="today-quote-col">
              <p className="today-quote">{currentDateInfo.quote}</p>
              <span className="today-author">- {currentDateInfo.verse}</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-content section-container">
            <div className="about-text">
              <h2>ST. JOHN PAUL II PARISH</h2>
              <p>
                St. John Paul II Parish is a Roman Catholic church located in Barangay Palimbo, Camiling, Tarlac, under the Diocese of Tarlac. Established in 2016, the parish was founded to serve the growing spiritual needs of the Catholic community in the area.
              </p>
              <p>
                Dedicated to St. John Paul II, the parish stands as a center of faith, devotion, and community life, offering regular liturgical services and pastoral activities. As one of the newer parishes in the diocese, it continues to foster spiritual growth, active participation, and unity among its parishioners.
              </p>
            </div>
            <a href="https://www.facebook.com/profile.php?id=100080028258021" target="_blank" rel="noopener noreferrer" className="about-image-wrapper">
              <Image src="/ChurchOutside.webp" alt="St. John Paul II Parish" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
            </a>
          </div>
        </section>
      </div>

      {/* Schedule Section */}
      <section className="section-container" id="schedule">
        <h2>Holy Week Schedule</h2>
        <div className="schedule-grid">
          {scheduleItems.map((item, index) => (
            <a href="https://www.facebook.com/share/p/18H81NWCXy/" target="_blank" rel="noopener noreferrer" className="glass-panel schedule-card" key={index}>
              <div className="schedule-image-wrapper">
                <img src={item.image} alt={`${item.subtitle} Image`} className="schedule-image" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Maundy Thursday Vigil Schedule */}
      <section className="section-container" id="vigil-schedule">
        <h2>Maundy Thursday</h2>
        <p className="text-center text-secondary mb-8" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
          Mass of the Lord&apos;s Supper &mdash; Vigil Schedule
        </p>

        <div className="vigil-layout">
          <div className="vigil-image-wrapper">
            <Image src="/vigil.webp" alt="Maundy Thursday Vigil" className="vigil-image" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="vigil-table-wrapper glass-panel">
            <table className="vigil-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Assigned Barangays / Ministries</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="vigil-time">6:00 &ndash; 7:00 PM</td>
                  <td>Cayasan, Papaac, Bacsay, Birbira, Manupeg, Collectors Ministry</td>
                </tr>
                <tr>
                  <td className="vigil-time">7:00 &ndash; 8:00 PM</td>
                  <td>Sitio Ribba, Manaquem, Nagrambacan, Bobon 1st, Bobon Caa., Lectors and Commentators Guild, JPII Choir</td>
                </tr>
                <tr>
                  <td className="vigil-time">8:00 &ndash; 9:00 PM</td>
                  <td>Bobon 2nd, Anoling 1st, Anoling 2nd, Anoling 3rd</td>
                </tr>
                <tr>
                  <td className="vigil-time">9:00 &ndash; 10:00 PM</td>
                  <td>Pao 1st, Pao 2nd, Pao 3rd, Catechists, Greeters</td>
                </tr>
                <tr>
                  <td className="vigil-time">10:00 &ndash; 11:00 PM</td>
                  <td>Palimbo Proper, Sinulatan 2nd, Knights of Columbus</td>
                </tr>
                <tr>
                  <td className="vigil-time">11:00 &ndash; 12:00 AM</td>
                  <td>Palimbo Caarosipan, Sinulatan 1st, Parish Pastoral Council</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Senakulo Section */}
      <section className="senakulo py-4" id="senakulo">
        <div className="section-container">
          <div className="senakulo-premier">
            <div className="senakulo-poster-wrapper">
              <a href="https://www.facebook.com/share/p/1DHZf8NTH3/" target="_blank" rel="noopener noreferrer">
                <Image src="/Senakulo.webp" alt="Senakulo Poster" className="senakulo-poster" width={600} height={800} style={{ width: '100%', height: 'auto' }} />
              </a>
            </div>
            <div className="senakulo-premier-text glass-panel">
              <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.2rem', marginBottom: '0.9rem', color: 'var(--accent-gold)', textAlign: 'left' }}>Senakulo | Holy Week 2026</h2>

              <div className="premier-block">
                <p className="senakulo-quote" style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                  "In the midst of darkness, there is light. Beneath the cross... there is hope."
                </p>
              </div>

              <div className="premier-block" style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  Witness the moving story of sacrifice and love of Jesus Christ, offered by the <strong style={{ color: 'var(--text-primary)' }}>St. John Paul II Parish Youth Ministry</strong>.
                </p>
                <p className="mt-4" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                  <strong>This is not just a performance—it is an invitation.</strong>
                </p>
              </div>

              <div className="premier-block" style={{ marginBottom: '2rem' }}>
                <h3 className="text-gold" style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem' }}>Believe. Return. Be transformed.</h3>
              </div>

              <div className="premier-block" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginBottom: 0 }}>
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>April 3, 2026 (Good Friday)</p>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>3:00 PM – Liturgy, Procession, and Senakulo</p>
                <p className="mt-4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                  St. John Paul II Parish
                </p>
              </div>
            </div>
          </div>

          {/* Cast of Senakulo Carousel */}
          <div className="senakulo-carousel-section">
            <h3 className="carousel-title">Cast of Senakulo</h3>
            {/* Row 1: images 0-6 */}
            <div className="carousel-wrapper">
              <div className="carousel-track scroll-left-7">
                {[...Array(7).keys(), ...Array(7).keys()].map((i, idx) => (
                  <div className="carousel-slide" key={`cast-r1-${idx}`}>
                    <Image src={`/${i}.webp`} alt={`Cast member ${i}`} width={320} height={400} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            {/* Row 2: images 7,8,10-13 (skipping 9) */}
            <div className="carousel-wrapper">
              <div className="carousel-track scroll-right-6">
                {[[7, 8, 10, 11, 12, 13], [7, 8, 10, 11, 12, 13]].flat().map((i, idx) => (
                  <div className="carousel-slide" key={`cast-r2-${idx}`}>
                    <Image src={`/${i}.webp`} alt={`Cast member ${i}`} width={320} height={400} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Behind the Senakulo Carousel */}
          <div className="senakulo-carousel-section">
            <h3 className="carousel-title">Team Behind the Senakulo</h3>
            {/* Row 1: images 14-20 (7 images) */}
            <div className="carousel-wrapper">
              <div className="carousel-track scroll-left-7">
                {[...Array(7).keys(), ...Array(7).keys()].map((i, idx) => (
                  <div className="carousel-slide" key={`team-r1-${idx}`}>
                    <Image src={`/${i + 14}.webp`} alt={`Team member ${i + 14}`} width={320} height={400} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            {/* Row 2: images 21-26 (6 images) */}
            <div className="carousel-wrapper">
              <div className="carousel-track scroll-right-6">
                {[...Array(6).keys(), ...Array(6).keys()].map((i, idx) => (
                  <div className="carousel-slide" key={`team-r2-${idx}`}>
                    <Image src={`/${i + 21}.webp`} alt={`Team member ${i + 21}`} width={320} height={400} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            {/* Row 3: images 27-32 (6 images) */}
            <div className="carousel-wrapper">
              <div className="carousel-track scroll-left-6">
                {[...Array(6).keys(), ...Array(6).keys()].map((i, idx) => (
                  <div className="carousel-slide" key={`team-r3-${idx}`}>
                    <Image src={`/${i + 27}.webp`} alt={`Team member ${i + 27}`} width={320} height={400} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            {/* Row 4: images 33-38 (6 images) */}
            <div className="carousel-wrapper">
              <div className="carousel-track scroll-right-6">
                {[...Array(6).keys(), ...Array(6).keys()].map((i, idx) => (
                  <div className="carousel-slide" key={`team-r4-${idx}`}>
                    <Image src={`/${i + 33}.webp`} alt={`Team member ${i + 33}`} width={320} height={400} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apostles Section */}
      <section className="section-container" id="apostles">
        <h2>Meet the 12 Apostles</h2>
        <p className="text-center text-secondary mb-8">The Twelve Apostles | Holy Week 2026</p>

        <div className="apostles-grid">
          {apostles.map((apostle, index) => (
            <a href="https://www.facebook.com/share/p/18H8pah4ov/" target="_blank" rel="noopener noreferrer" className="glass-panel apostle-card" key={index}>
              <div className="apostle-image-wrapper">
                <img src={apostle.image} alt={`${apostle.name} Image`} className="apostle-image" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-container" id="activities">
        <h2>10 Things To Do While Holy Week</h2>
        <p className="text-center text-secondary mb-8">Meaningful ways to observe the Lenten season and grow closer to God.</p>

        <div className="activities-list">
          {activities.map((act, index) => (
            <div className="glass-panel activity-item" key={index}>
              <div className="activity-number">{index + 1}</div>
              <div className="activity-text">
                <h4>{act.title}</h4>
                <p>{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prayer Section */}
      <section className="prayer-section" id="prayer">
        <div className="prayer-content">
          <h2>Prayer for Holy Week</h2>
          <div className="prayer-text">
            {`Heavenly Father, as we enter this Holy Week, we come before You with humble hearts. We remember the suffering, sacrifice, and great love of Your Son, Jesus Christ, who gave His life for our salvation.

Lord Jesus, teach us to walk with You in Your journey— from the joy of Your welcome in Jerusalem, to the pain of Your betrayal and crucifixion, and to the silence of the tomb. Help us to understand that in every suffering, there is purpose, and in every sacrifice, there is love.

Forgive us, O Lord, for the times we have turned away from You, for our sins, our doubts, and our weaknesses. Cleanse our hearts and renew our spirits, so that we may become worthy of Your grace.

As we reflect on Your Passion, help us to carry our own crosses with faith and courage. Teach us to love as You have loved, to forgive as You have forgiven, and to serve others with humility and compassion.

May this Holy Week be a time of true conversion for us— a time to believe more deeply, to return to You sincerely, and to be transformed by Your mercy.

And as we await the joy of Your Resurrection, fill our hearts with hope, peace, and new life. May we rise with You, leaving behind sin, and embracing the life You have prepared for us.

We offer this prayer to You, with faith and trust in Your everlasting love. Amen.`}
          </div>
        </div>
      </section>
    </>
  );
}
