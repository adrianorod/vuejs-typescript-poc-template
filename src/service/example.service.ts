import axios from 'axios';
import { Constants } from '@/utils/constants.utils';
import router from '@/router';
import { ExampleModel } from '@/models/example.model';

export class ExampleService {

  public static exampleGet(): ExampleModel {
    const url = Constants.EXAMPLESERVICE.exampleGet;

    return axios.get(url)
      .then(result => result.data.content)
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('-----');
        console.log('ERROR in TrocaTemporariaService.getTurmas()');
        console.log(error);
        console.log('-----');

        router.push('error');
      });
  }

}
