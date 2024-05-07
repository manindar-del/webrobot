import '../App.css';
import '../component/categories-bots-list.css';
import React, {useState} from 'react';
import InnerHeader from '../component/InnerHeader'
import TopSearch from '../component/top-serarch' 
import {Container, Row, Col, Accordion, AccordionItem , AccordionHeader, AccordionBody } from 'reactstrap';
import Breadcrumbs from '../component/breadcrumbs'
import ReactTooltip from 'react-tooltip';

function DesignerSimpleEmpty(props) {

  const [openAccordion, setOpenAccordion] = useState('1')
  
  return (
    <>
    <InnerHeader/>
    <section>
      <Breadcrumbs />
      <TopSearch />
      <Container>
        <Row>
          <Col lg="6">
          <Accordion
            open={openAccordion}
            toggle={function noRefCheck(data){
              setOpenAccordion(data.toString())
            }}
          >
            <AccordionItem>
              <AccordionHeader targetId="1">
                Accordion Item 1
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <strong>
                  This is the first item's accordion body.
                </strong>
                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                <code>
                  .accordion-body
                </code>
                , though the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                Accordion Item 2
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <strong>
                  This is the second item's accordion body.
                </strong>
                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                <code>
                  .accordion-body
                </code>
                , though the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                Accordion Item 3
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <strong>
                  This is the third item's accordion body.
                </strong>
                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                <code>
                  .accordion-body
                </code>
                , though the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
        </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
    </>    
  );
}
export default DesignerSimpleEmpty;