import React from 'react';
import { connect } from 'react-redux';

function JobCard({ job, dark }) {
  return (
    <div className={`${dark ? 'bg-blue-800' : 'bg-white'} shadow flex flex-wrap py-4 px-3 rounded shadow-sm mb-2 lg:mb-4`}>
      <header className="w-full flex flex-wrap justify-between items-baseline lg:mb-2">
        <h2 className={`${dark ? 'text-white' : 'text-gray-900'} text-md font-bold`}>
          {job.title}
        </h2>
        <span className={`${dark ? 'text-gray-200': 'text-gray-600'} text-xs`}>2 Days ago</span>
      </header>
      <footer className="w-full flex justify-between mt-2">
        <div className={`flex flex-wrap items-center w-1/2 flex-between text-xs ${dark ? 'text-gray-200': 'text-gray-600'}`}>
          <span>{job.company}</span>
          <span className="mx-1">—</span>
          <span className={`${dark ? 'text-green-400': 'text-green-600'} font-bold`}>{job.type}</span>
        </div>
        <div className={`${dark ? 'text-gray-200': 'text-gray-600'} text-xs`}>
          <i className="fas fa-globe-asia mr-1"></i>
          <span>{job.location}</span>
        </div>
      </footer>
    </div>
  );
}

const mapStateToProps = state => ({
  dark: state.theme.dark,
});

export default connect(mapStateToProps)(JobCard);
