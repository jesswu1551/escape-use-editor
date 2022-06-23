Quill.register('modules/imageUploader', ImageUploader);
const icons = Quill.import('ui/icons');
icons['imageURL'] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"/></svg>';

const imageUrl = 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
const toolbarOptions = [
  [{ 'size': ['small', false, 'large', 'huge'] }],
  ['bold', 'italic'],
  ['link', 'image', 'imageURL'],
];

let quill = new Quill('#description', {
  theme: 'snow',
  placeholder: '寫下產品描述',
  modules: {
    imageResize: {
      displaySize: true,
    },
    toolbar: {
      container: toolbarOptions,
      handlers: {
        imageURL: imageHandler,
      }
    },
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(imageUrl);
          }, 3500);
        })
      }
    }
  },
});

function imageHandler() {
  let range = this.quill.getSelection();
  let value = prompt('Please copy paste the image URL here.');
  if (value) {
    this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
  }
}
