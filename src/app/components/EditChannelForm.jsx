import { reduxForm } from 'redux-form';
import ChannelsForm from './ChannelsForm';
import connect from '../connect';

const mapStateToProps = (state) => {
  const {
    channels,
    modal,
  } = state;
  const { name: text } = Object.values(channels).find(({ id }) => id === modal.data.id);
  const props = {
    initialValues: {
      text,
    },
  };
  return props;
};
@connect(mapStateToProps)
@reduxForm({
  form: 'EditChannelForm',
  onSubmitSuccess: (result, dispatch, { reset }) => {
    reset();
  },
})
export default class EditChannelForm extends ChannelsForm {}
