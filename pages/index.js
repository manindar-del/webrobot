import Logcss from "../styles/login.module.css";
import React from "react";
import Header from "../components/header/Header";
import { } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
// import Icon4 from "../public/images/icon4.svg";
// import Icon5 from "../public/images/icon5.svg";
// import Icon6 from "../public/images/icon6.svg";

function Login(props) {
  return (
    <>
      <Header />

      <section className={Logcss.loginMain}>
        <div className={Logcss.loginWrap}>
          <h2>Thanks for choosing WebRobot for your valuable data business!</h2>
          <h3>
            Use this app to extract every data on the Internet and create
            value-added and proﬁtable datasets and big-data projects.
          </h3>
          <ul>
            <li>
              <Link href="/selfservicehome">
                <>
                  <Image
                    width={50}
                    height={50}
                    src={"/images/icon4.svg"}
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>
                    Documentation <br />
                    &amp; support
                  </span>
                </>
              </Link>
            </li>
            <li>
              <a href="/auth">
                <>
                  <Image
                    width={50}
                    height={50}
                    src={"/images/icon5.svg"}
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Login</span>
                </>
              </a>
            </li>
            <li>
              <Link href="#">
                <>
                  <Image
                    width={50}
                    height={50}
                    src={"/images/icon6.svg"}
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Sign up</span>
                </>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Login;
