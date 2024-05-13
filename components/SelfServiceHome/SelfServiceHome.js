import Logcss from "../../styles/login.module.css";
import React from "react";
import Link from "next/link";
import InnerHeader from "../inner-header/InnerHeader";
import {} from "reactstrap";
import Image from "next/image";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";

function SelfServiceHome(props) {
  const router = useRouter();

  const logout = () => {
    Cookies.remove('auth')
    router.push("/")
    
  }
  return (
    <>
      <InnerHeader />

      <section className={Logcss.loginMain}>
        <div className={`${Logcss.loginWrap} ${Logcss.style_two}`}>
          <h2>Welcome to WebRobot Self-Service Web Scraping Platform!</h2>
          <h3>
            From here, you yes can control your proﬁle, manage your plans, payment,
            data extraction projects, and look for help.
          </h3>
          <ul>
            <li>
              <Link href="/SelfServiceHome">
                <a>
                  <Image
                    width={77}
                    height={74}
                    src={"/images/icon12.svg"}
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#0">
                <a>
                  <Image
                    width={77}
                    height={74}
                    src={"/images/icon13.svg"}
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Profile</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#0">
                <a>
                  <Image
                    width={77}
                    height={74}
                    src={"/images/icon14.svg"}
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Plans</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#0">
                <a>
                  <Image
                    width={77}
                    height={74}
                    src={"/images/icon15.svg"}
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Orders</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/new-project">
                <a>
                  <Image
                    width={77}
                    height={74}
                    src={"/images/icon16.svg"}
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Projects</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#0">
                <a>
                  <Image
                    width={77}
                    height={74}
                    src={"/images/icon4.svg"}
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Help</span>
                </a>
              </Link>
            </li>
            <li>
            <div  onClick={logout} >
                <a>
                <img
                  width={77}
                  height={74}
                  src={"/images/icon12.svg"}
                  alt="Icon"
                  style={{ display: "block" }}
                />
                <span className={Logcss.login_text}>LogOut</span>
                </a>
              </div>

            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default SelfServiceHome;
