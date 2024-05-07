import Headcss from "./header.module.css";
import React from "react";
import { Container } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
// import { Tooltip } from "react-tooltip";

function Header(props) {
  return (
    <>
      <header className={Headcss.header}>
        <Container>
          <div className={Headcss.logo}>
            <Link href="/">
              <>
                <Image
                  width={400}
                  height={100}
                  src={"/images/logo.png"}
                  alt="WebRobot"
                  className={Headcss.logoImg}
                />
              </>
            </Link>
            <ul className={Headcss.header_right}>
              <li>
                <Link href="/selfservicehome">
                  <a>
                    <Image
                      width={30}
                      height={30}
                      src={"/images/icon1.svg"}
                      alt="Icon"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/auth" data-tip="Login">
                  <a>
                    <Image
                      width={50}
                      height={50}
                      src={"/images/icon2.svg"}
                      alt="Icon"
                    />
                  </a>
                </Link>
                {/* <ReactTooltip /> */}
              </li>
              <li>
                <Link href="/selfservicehome" data-tip="Signup">
                  <a>
                    <Image
                      width={50}
                      height={50}
                      src={"/images/icon3.svg"}
                      alt="Icon"
                    />
                  </a>
                </Link>
                {/* <ReactTooltip /> */}
              </li>
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
}
export default Header;
