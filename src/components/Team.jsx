import React, { useState } from 'react';
import classes from './Team.module.css';
import tab1 from '../assets/tab-1.jpg';
import tab2 from '../assets/tab-2.jpg';

const Team = () => {
  const [tab, setTab] = useState(tab1);
  return (
    <section className={classes.team} id="team">
      <div className="title">
        <h2>
          <span>02.</span>CLIMB
        </h2>
        <p style={{width:  '90vw'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          explicabo, accusantium enim rerum accusamus, praesentium doloribus
          doloremque saepe autem deserunt, corrupti at suscipit. Aperiam at
          perferendis praesentium? Deserunt, rem molestiae?
        </p>
      </div>
      <div className={classes.btn}>
        <button
          className={tab === tab1 ? classes.active : classes.inactive}
          onClick={() => setTab(tab1)}
        >
          MOUNTAIN 1
        </button>
        <button
          className={tab === tab2 ? classes.active : classes.inactive}
          onClick={() => setTab(tab2)}
        >
          MOUNTAIN 2
        </button>
      </div>
      <div className={classes.tab}>
        <img src={tab} alt="" />
        <table>
          <thead>
            <tr>
              <th scope="row" colspan="{2}">
                SHEDULE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{tab === tab1 ? '25 Nov 2016': '17 Nov 2016'}</th>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <th scope="row">{tab === tab1 ?'28 Nov 2016': '13 Dec 2016'}</th>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <th scope="row">{tab === tab1 ? '18 Dec 2016': '28 Dec 2016'}</th>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <th scope="row">{tab === tab1 ? '7 Jan 2017': '9 Feb 2017'}</th>
              <td>Vestibulum viverra</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Team;
