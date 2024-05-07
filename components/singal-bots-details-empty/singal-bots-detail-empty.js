import "../App.css";
import "../component/project-detail-empty.css";
import React from "react";
import InnerHeader from "./InnerHeader";
import TopSearch from "./top-serarch";
import { Table } from "reactstrap";
import Breadcrumbs from "./breadcrumbs";

function SingalBotsDetailEmpty(props) {
  return (
    <>
      <InnerHeader />
      <section className="project-detail-empty">
        <Breadcrumbs />
        <TopSearch />
        <div className="project-items">
          <div className="table_responsive">
            <Table borderless style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Extraction date</th>
                  <th>Nr. of Records</th>
                  <th>Statistics</th>
                  <th>URLs List</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </Table>
            <div className="project-empty-content">
              <p>
                There are no data sets available yet. Your bot/scraper will
                start extracting data soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SingalBotsDetailEmpty;
