import { siteTitle } from "../components/Layout/layout";
import styles from "./index.module.scss";
import classnames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

// 写死的 GAME STATISTICS 数据
const products = [
  {
    id: 1,
    attributes: {
      seoName: "cs2",
      name: "CSGO",
    },
  },
  // {
  //   id: 2,
  //   attributes: {
  //     seoName: "pubg",
  //     name: "PUBG",
  //   },
  // },
  {
    id: 3,
    attributes: {
      seoName: "fortnite",
      name: "Fortnite",
    },
  },
  {
    id: 4,
    attributes: {
      seoName: "valorant",
      name: "Valorant",
    },
  }
];


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="vercel.svg" />
        <link rel="canonical" href="" />
      </Head>

      <section className={styles.section}>
        <div className="breadcrumb">
          <span className={styles.item} >
            <a href={`${process.env.MAINSITE}`} >Home</a>
            {" > "} 
          </span>
          <span className={styles.item}>
            Game Tools
          </span>
        </div>
      </section>
      <section className={styles.gameToolsTitle} >
        <h1>
          Game Tools
        </h1>
      </section>
      <section className={styles.gameSection} id="calculator">
        <div className={styles.gameTitleIcon}>
          <Image className={styles.iconImage} priority src="/images/calculator-icon.webp" width={40} height={40} alt="" />

          <h2>ACCOUNT VALUE CALCULATOR</h2>
        </div>

        <div className={styles.gameSectionWrap}>
          <div className={styles.gameLeft}></div>
          <div className={styles.gameRight}>
            <p className={styles.description}>{`DON'T WANT TO UNDERSELL YOUR ACCOUNT? WORRIED ABOUT OVERPAYING?`}</p>
            <span>{`Calculate a game account's value with our newest tool!`}</span>
            <Link href="/value-calculator">
              <button className={styles.gameHomeLinkBtn}>TRY IT NOW </button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.gameSection} id="tracker">
        <div className={styles.gameTitleIcon}>
          <Image className={styles.iconImage} priority src="/images/tracker-icon.webp" width={40} height={40} alt="" />
          <h2>CURRENCY MARKET TRACKER</h2>
        </div>

        <div className={classnames(styles.gameSectionWrap, styles.gameSectionWrapMarket)}>
          <div className={styles.gameRight}>
            <p className={styles.description}>?</p>
            <span>Go play with our financial-stock-like price index and buy cheap currency!</span>
            <Link href={`/market-price-tracker`}>
              <button className={styles.gameHomeLinkBtn}>Check Now!</button>
            </Link>
          </div>
          <div className={styles.gameLeftTwo}></div>
        </div>
      </section>

      <section className={styles.gameSection} id="stats">
        <div className={styles.gameTitleIcon}>
          <Image className={styles.iconImage} priority src="/images/stats-icon.webp" width={40} height={40} alt="GAME STATISTICS" />
          <h2>GAME STATISTICS</h2>
        </div>

        <div className={classnames(styles.gameSectionWrap, styles.gameSectionWrapStatsTools)}>
          <div className={classnames(styles.gameLeftTwo, styles.gameStatsLeftTwo)}></div>
          <div className={classnames(styles.gameRight, styles.gameStatsRight)}>
            <p className={styles.description}>YOU WANT TO KNOW HOW MANY KILLS, WINS, HEADSHOTS YOU HAVE GOT IN YOUR FAVOURITE GAME?</p>
            <span>Check our stats tools below!</span>
            <ul>
              {products.map((data) => (
                <li key={data.id}>
                  <div className={styles["product-calculator-banner-wrapper"]}>
                    <Link
                      href={`/${data.attributes.seoName}-stats`}>
                        <Image
                          src={`/images/value-calculator/calculator-game-${data.attributes.seoName}.jpg`}
                          width={270}
                          height={124}
                          alt={data.attributes.seoName}
                        />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <p className={styles["clear"]}></p>
          </div>
        </div>
      </section>


      <section className={styles["product-soon"]}>
        <div className={styles["product-soon-image"]}
          style={{ position: 'relative', width: '150px', height: '150px' }}>
          <Image
            src="/images/tools.webp"
            layout="fill"
            objectFit="cover"
            alt="More Tools Coming Soon"
          />
        </div>
        <div className={styles["product-soon-text"]}>
          <span>
            <strong>More Tools</strong>
          </span>
          <span>Coming Soon</span>
        </div>
      </section>

      {/* <div className={styles.divider}></div>

      <section className={styles["product-soon", utilStyles.headingMd]}>
        <h2 className={styles.descriptionHeading} style={{ color: "#ffa300" }}>
          <Link href="/playercount">Player Count</Link>
        </h2>
        <p className={styles.description}>PLAYER COUNT DESCRIPTION, UNDER CONSTRUCTION...</p>
        <Link href="/playercount">
          <a style={{ display: "block", textAlign: "center" }}>
            <button className={styles.gameHomeLinkBtn}>TRY IT NOW </button>
          </a>
        </Link>
      </section>

      <div className={styles.divider}></div> */}

      <nav className={styles["product-navigation"]}>
        <ul>
          <li>
            <Scroll activeClass="active" spy={true} to="calculator">Account Value Calculator</Scroll>
          </li>
          <li>
            <Scroll activeClass="active" spy={true} to="tracker">Market Price Tracker</Scroll>
          </li>
          <li>
            <Scroll activeClass="active" spy={true} to="stats">Game Statistics</Scroll>
          </li>
        </ul>
      </nav>
    </div>
  );
}
