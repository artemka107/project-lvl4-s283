import { reduxForm } from 'redux-form';
import ChannelsForm from './ChannelsForm';

@reduxForm({
  form: 'EditChannelForm',
  onSubmitSuccess: (result, dispatch, { reset }) => {
    reset();
  },
})
export default class EditChannelForm extends ChannelsForm {}
