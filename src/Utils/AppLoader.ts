export default class Loader {
  static loaderRef: any;

  static setLoader = (ref: any) => {
    this.loaderRef = ref;
  };

  static isLoading = (check: boolean) => {
    if (this.loaderRef) {
      this.loaderRef.showLoader(check);
    }
  };
}
