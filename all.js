Quill.register('modules/imageUploader', ImageUploader);

const imageUrl = 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
const toolbarOptions = [
  [{ 'size': ['small', false, 'large', 'huge'] }],
  ['bold', 'italic'],
  ['link', 'image'],
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
        image: imageHandler,
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
    this.quill.insertEmbed(range.index, 'image', value);
  }
}
