import { Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

const Homepage = () => {
  return (
    <div>
        <div className="soc"><i class="fa-brands fa-facebook"></i> <br /><i class="fa-brands fa-linkedin"></i> <br /><i class="fa-brands fa-instagram"></i></div>
      <div className="first">
        <div className="firstleft">
          <p className="gray">WE PROMISE THAT</p>
          <p className="head">
            We work with you to solve your most critical business priorities.
          </p>
          <p className="smallp">
            We are a team of makersn, thinkers, explorer and theater singers,
            paly with curiosity and experimentation, using what we learn to
            create meaningful digital products that connect with people.
          </p>
          <Flex>
            <Button colorScheme="green">Know more</Button>
            <Spacer />
            <Button colorScheme="gray">Our Works</Button>
          </Flex>
        </div>
      </div>
      <div>
        <p className="gray center">OUR SERVICE</p>
        <p className="head center widt">
          We work with you to transform your ideas
        </p>
        <Flex>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <div className="num">
            <p className="greenh">1</p>
            <p className="mp center">We make proper task for your.</p>
            <p className="smallp center">
              We are a team of makersn, thinkers, explorer and theater singers,
              paly with curiosity and experimentation,
            </p>
          </div>
          <Spacer />
          <div className="num">
            <p className="greenh">2</p>
            <p className="mp center">We make proper task for your.</p>
            <p className="smallp center">
              We are a team of makersn, thinkers, explorer and theater singers,
              paly with curiosity and experimentation,
            </p>
          </div>
          <Spacer />
          <div className="num">
            <p className="greenh">3</p>
            <p className="mp center">We make proper task for your.</p>
            <p className="smallp center">
              We are a team of makersn, thinkers, explorer and theater singers,
              paly with curiosity and experimentation,
            </p>
          </div>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
        </Flex>
      </div>
      <div>
        <p className="gray center">WE DISCOVER</p>
        <p className="head center widt">Driving your growth is what we do</p>
        <p className="smallp center widt">
          We are a team of makersn, thinkers, explorer and theater singers, paly
          with curiosity and experimentation, using what we learn to create
          meaningful digital products that connect with people.
        </p>
        <img src="https://img.freepik.com/premium-vector/business-people-working-computer-isolated-work-agency-persons-managers-cartoon-characters-modern-office-man-woman-young-professional-desk-vector-illustration-computer-work-office_53562-13397.jpg?w=2000" alt="" className="secimg"/>
        <Button colorScheme="green" className="marcen">Know more</Button>
      </div>
      <div>
      <p className="gray center">CLIENTS</p>
        <p className="head center widt">Some of our clients we work with</p>
        <img src="https://www.i-am-freelance-graphic-designer.co.uk/wp-content/uploads/2015/09/clients-we-work-with-food-packaging.png" alt="" className="thrimg"/>
      </div>
      <div className="last">
        <div className="lastleft">
          <p className="gray">LEISURE TIME</p>
          <p className="head">
            We take a break when it doesn't work
          </p>
          <p className="smallp">
            We are a team of makersn, thinkers, explorer and theater singers,
            paly with curiosity and experimentation, using what we learn to
            create meaningful digital products that connect with people.
          </p>
            <Button colorScheme="green">Know more</Button>
        </div>
      </div>
      <div>
      <p className="gray center">WE DISCOVER</p>
        <p className="head center widt">We make proper task for your evevry problem.</p>
        <input placeholder="We are a team" className="inp"/>
        <button className="subs">Subscribe</button>
        <p className="smallp center widt">
          We are a team of makersn, thinkers, explorer. We approch work and play.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
