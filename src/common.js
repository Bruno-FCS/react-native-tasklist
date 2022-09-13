import {Alert, Platform} from 'react-native';

const server =
  Platform.OS === 'ios' ? 'http://localhost:3030' : 'http://10.0.2.2:3030';

function showError(err) {
  Alert.alert('Ops! Ocorreu um problema', `Mensagem: ${err}`);
}

function showSuccess(msg) {
  Alert.alert('Sucesso!', msg);
}

export {server, showError, showSuccess};
