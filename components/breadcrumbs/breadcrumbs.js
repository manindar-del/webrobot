// import '../App.css';
import Breadcrumbscss from "./breadcrumbs.module.css";
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Link from "next/link";

function breadcrumbs(props) {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/#0">
            <span>Project</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/#0">
            <span>Smart TVs price comparison (ID# 0001234)</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/#0">
            <span>Scrapers</span>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default breadcrumbs;
