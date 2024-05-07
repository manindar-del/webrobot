import NewCategoriesCss from "./new-categories.module.css";
import React, { useEffect, useState } from "react";
import InnerHeader from "../inner-header/InnerHeader";
import TopSearch from "../top-search/top-serarch";
import Link from "next/link";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  Table,
  ModalBody,
  Button,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

// import Icon20Hover from "../images/icon20-hover.svg";
// import uplaodIcon from "../images/Upload-Icon.svg";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Category Name is required")
    .min(5, "Category Name must be at least 5 characters"),
});

function NewCat(props) {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // console.log("Form data submitted:", data);
    mutation.mutate(data);
  };
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios
        .post("api/category", data)
        .then((response) => {
          Swal.fire("Saved!", "Your item has been Saved.", "success");
          reset();
          router.push("/categories-list");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });
  useEffect(() => {}, [isSubmitSuccessful]);

  return (
    <>
      <InnerHeader />
      <section className={NewCategoriesCss.newProject}>
        <TopSearch />
        <div className={NewCategoriesCss.project_items}>
          <div className={NewCategoriesCss.table_responsive}>
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
          </div>
          <div className={NewCategoriesCss.newProjectWrap}>
            <h3>
              You are almost done! Now create your ﬁrst extraction project.
            </h3>
            <Form>
              <FormGroup className={NewCategoriesCss.newFile}>
                <Label for="file">
                  <span onClick={toggle}>
                    <span>
                      <img src={"/images/icon20-hover.svg"} alt="Icon18Hover" />
                    </span>
                    {/* <Input id="file" type="file"  /> */}
                    <span className={NewCategoriesCss.input_text}>
                      NEW CATEGORY
                    </span>
                  </span>
                </Label>
              </FormGroup>
            </Form>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={`modalWrap header-modal`}
      >
        <ModalHeader>
          <span className="modalTitle">New Category - Creation Panel</span>
          <span className={"closeButton"} onClick={toggle}></span>
        </ModalHeader>
        <ModalBody>
          <div className="modalBodyContent">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label>Category name:</Label>
                {/* <Input
                  placeholder="Write your category name here"
                  type="text"
                /> */}
                <input
                  className="form-control"
                  {...register("name")}
                  placeholder="Write your category name here"
                  type="text"
                />

                {errors?.name && (
                  <p>
                    <span style={{ color: "red" }}>
                      {errors?.name?.message}
                    </span>
                  </p>
                )}
              </FormGroup>
              {/* <FormGroup>
                <Label>Description:</Label>
                <Input
                  placeholder="Write a brief description of your category here"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label>Upload image:</Label>
                <span className="uploadIcon">
                  <Input type="file" />
                  <img src={"/images/Upload-Icon.svg"} alt="Upload" />
                </span>
              </FormGroup> */}
              <div className="btn_block">
                <Button
                  color="danger"
                  style={{ marginRight: "10px" }}
                  onClick={toggle}
                >
                  CANCEL
                </Button>
                {/* <Link href="/categories-list" className="style_two"> */}
                <Button color="primary" type="submit">
                  SAVE
                </Button>
                {/* </Link> */}
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default NewCat;
