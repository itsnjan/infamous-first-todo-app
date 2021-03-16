import React from 'react';

export default function Archive(props) {
  return (
    <section className="is-flex is-flex-direction-column is-align-items-center">
      <h2 className="title is-3 mt-5">Completed tasks 🥳</h2>
      <div>
        <ul>
          {props.archiveList.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <input type="submit" onClick={props.deleteArchive} className="button is-light mt-3" value="Delete completed Tasks" />
    </section>
  );
}
