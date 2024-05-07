import "../App.css";
import "../component/categories-list-empty.css";
import React from "react";
import InnerHeader from "../component/InnerHeader";
import TopSearch from "../component/top-serarch";
import { Table, Form, FormGroup, Label, Input } from "reactstrap";
import Breadcrumbs from "../component/breadcrumbs";
import Icon20Hover from "../images/icon20-hover.svg";

function CategoriesListEmpty(props) {
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
                  <th>Name/ID/Description</th>
                  <th>Creation date</th>
                  <th>Nr. bots/scrapers</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </Table>
            <div className="project-empty-content">
              <p>
                You are almost done! Now create your ﬁrst category of extraction
                bots/scrapers.
              </p>
              <Form>
                <FormGroup className="newFile">
                  <Label for="file">
                    <span>
                      <img src={Icon20Hover} alt="Icon18Hover" />
                    </span>
                    <Input id="file" type="file" />
                    <span className="input-text">New Project</span>
                  </Label>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CategoriesListEmpty;
