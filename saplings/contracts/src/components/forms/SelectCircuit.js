import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { listCircuits } from '../../api/splinter';
import { ListBoxSelect } from './controls';
import CircuitDetails from '../circuitDetails/CircuitDetails';

export function SelectCircuit({ handleCircuitSelection }) {
  const [allCircuits, setAllCircuits] = useState([]);
  const [selectedCircuit, setSelectedCircuit] = useState('');

  useEffect(() => {
    const fetchCircuits = async () => {
      const res = await listCircuits();
      const circuitOptions = [];

      res.data.forEach(elem => {
        circuitOptions.push({ value: elem.id, content: elem.id });
      });

      setAllCircuits(circuitOptions);
    };
    fetchCircuits();
  }, []);

  function handleSelection(event) {
    if (event) {
      event.preventDefault();

      if (event.target.value) {
        handleCircuitSelection(event.target.value);
        setSelectedCircuit(event.target.value);
      }
    }
  }

  return (
    <div>
      <ListBoxSelect
        label="Select Circuit"
        name="Select Circuit"
        options={allCircuits}
        onChange={handleSelection}
      />
      <CircuitDetails circuitId={selectedCircuit} />
    </div>
  );
}

SelectCircuit.propTypes = {
  handleCircuitSelection: PropTypes.func.isRequired
};
