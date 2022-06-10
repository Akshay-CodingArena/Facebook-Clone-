import { createApi } from "unsplash-js";

const unsplash = unsplash.createApi({ accessKey: 'SzVS_jGjke9XsnTSbT2xOdEsVjiIC19y7Ate1lCM1Mo' });
// non-feed example
unsplash.photos.get({ photoId: 'foo' }).then(result => {
if (result.errors) {
    // handle error here
    console.log('error occurred: ', result.errors[0]);
} else {
    // handle success here
    const photo = result.response;
    console.log(photo);
}
});
