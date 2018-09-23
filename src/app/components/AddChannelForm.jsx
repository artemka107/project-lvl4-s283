import { reduxForm } from 'redux-form';
import ChannelsForm from './ChannelsForm';

@reduxForm({
  form: 'AddChannelForm',
  onSubmitSuccess: (result, dispatch, { reset }) => {
    reset();
  },
})
export default class EditChannelForm extends ChannelsForm {}
