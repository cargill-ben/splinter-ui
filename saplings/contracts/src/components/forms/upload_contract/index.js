import React, { useState } from 'react';

import { MultiStepForm, Step } from 'App/components/forms/MultiStepForm';
import { ListBoxSelect, TextField, FileSelect } from 'App/components/forms/controls';
// import { ListBoxSelect, TextField } from '../controls'

import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

import './index.scss';

const NamespaceForm = () => {
  const [readState, setReadState] = useState(false);
  const [writeState, setWriteState] = useState(false);

  return (
    <div>
      <TextField name='Namespace Registry Name' label='Namespace Registry Name' />
      <span style={{marginTop: '5px'}} />
      <ListBoxSelect label='Select Owners of the Namespace' 
        name='abcd' onChange={(event) => console.log(event)} options={[
        { value: 'User 1', content: 'User 1' },
        { value: 'User 2', content: 'User 2' },
        { value: 'User 3', content: 'User 3' }
        ]} isMulti={true} />
      <span className='label' style={{marginLeft: '16px', marginTop: '5px'}}>Set Permissions for the Namespace</span>
      <div style={{flexDirection: 'row', marginTop: '10px' }}>
        <Checkbox checked={readState} onChange={() => setReadState(!readState)} 
          style={{margin: '0 15px'}} /> Read
        <Checkbox checked={writeState} onChange={() => setWriteState(!writeState)} 
          style={{margin: '0 0 0 15px'}} /> Write
      </div>
    </div>
  )
}

export function UploadContractForm() {
  const [registries, setRegistries] = useState([]);

  return (
    <MultiStepForm
      formName="Upload Contract"
      handleSubmit={() => { console.log('Next step'); }}
      handleCancel={() => { console.log('Cancel') }}>
      <Step step={1} label="Select Circuit">
        <div className="step-header">
          <div className="step-title">Select Circuit</div>
          <div className="help-text">
            Select the circuit to deploy the smart contract to.
          </div>
        </div>
        <div>
          <ListBoxSelect label='Select Circuit' name='abcd' onChange={(event) => console.log(event)} options={[
            { value: 'Circuit ID 1', content: 'Circuit ID 1' },
            { value: 'Circuit ID 2', content: 'Circuit ID 2' }
            ]} />
        </div>
      </Step>
      <Step step={2} label="Upload contract">
        <div className="step-header">
          <div className="step-title">Upload Contract</div>
          <div className="help-text">
            Upload the packaged smart contract in the form of a .scar file.
          </div>
        </div>
        <div>
          <FileSelect name='Upload Contract' label='Upload Contract' />
          <span style={{marginTop: '5px'}} />
          <TextField name='Contract Registry Name' label='Contract Registry Name' />
        </div>
      </Step>
      <Step step={3} label="Create Namespace Registry">
        <div className="step-header">
          <div className="step-title">Create Namespace Registry</div>
          <div className="help-text">
            Create the namespace registry for the uploaded contract.
          </div>
        </div>
        <div>
          <NamespaceForm />
        </div>
      </Step>
    </MultiStepForm>
  );
}
