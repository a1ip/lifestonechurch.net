import React from 'react';
import styled from 'react-emotion';
import Breadcrumbs from '../../components/Breadcrumbs';
import GoogleMap from '../../components/GoogleMap';

import cafe from './cafe.jpg';

const title = 'Visit';

const MapContainer = styled.div`
  max-width: 900px;
`;

const Visit = () => (
  <div>
    <Breadcrumbs path={[{ title: 'Home', url: '/' }]} title={title} />
    <h1>{title}</h1>

    <img src={cafe} />

    <p>
      When you’re visiting a church for the first time, there can sometimes be
      some unknowns. You might be asking, “Where do I go? Where do my kids go?
      What will the music be like? What will people be wearing? What will the
      teaching be like? What time will I get out for lunch?”
    </p>

    <p>
      These are all valid questions to ask when you visit a new church. Below
      you will find some helpful information on what to expect when you arrive
      at a Lifestone Church service. We want your visit to feel as comfortable
      as possible.
    </p>

    <p>
      <b>Dress</b>: Dress comfortably. You’ll feel right at home wearing
      anything from shorts, to jeans, to business casual.
    </p>

    <p>
      <b>Time frame</b>: We have 2 services times on Sunday mornings to choose
      from: 9:00-10:00 or 10:30-11:30. We recommend arriving about 10-15 minutes
      early so that you can get your kids checked in and grab some donuts and
      coffee before the worship service begins.{' '}
    </p>

    <p>
      <b>Arriving</b>: Inside, a Lifestone volunteer will greet you and answer
      any questions you have about finding Kids Life area, worship area, etc.
    </p>

    <p>
      <b>Kid’s Life</b>: We encourage you to bring your kiddos (infants through
      5th graders) to participate in our fun, safe, kid-friendly activities
      while you attend the adult service. Kids are very important to us here at
      Lifestone, and our goal is to teach them about Jesus’ love in a way that
      they will understand and enjoy!
    </p>

    <p>For more information on our children’s program, click here.</p>

    <p>
      <b>Breakfast</b>: For your convenience, a simple breakfast with donuts,
      coffee, tea, and hot chocolate will be set up for you outside the worship
      area.
    </p>

    <p>
      <b>Music</b>: Come enjoy contemporary praise songs as well as some old
      hymns with modern arrangements.
    </p>

    <p>
      <b>Teaching</b>: Be encouraged by biblical teaching that is useful in
      every day living.
    </p>

    <p>
      <b>Directions</b>:
    </p>

    <p>3443 12600 S, Riverton, UT 84065</p>

    <MapContainer>
      <GoogleMap />
    </MapContainer>
  </div>
);

export default Visit;