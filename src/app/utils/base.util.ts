declare const $: any;

export const showNotification = (
    from: string,
    align: string,
    type: string,
    message: string,

) => {
    $.notify({
        message: message,
      }, {
        placement: {from, align},
        offset: {x: 20, y: 35},
        type,
        template: `<div class="alert alert-{0} alert-with-icon col-md-4">
            <i class="material-icons alert-icon">notifications</i>
            <button class="close" type="button" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>
            <span>{2}</span>
          </div>`
      });

}
