import React from 'react';

export default function Archive(props) {
    return (
        <section className="flex--column flex--align-center text--light-grey">
          <h2>Completed tasks 🥳</h2>
          <div>
          <ul>
            {props.archiveList.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
          </div>
        </section>
      );
}
