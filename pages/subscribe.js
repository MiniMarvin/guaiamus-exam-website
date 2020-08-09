import TopImage from '../components/elements/topImage'
import theme from '../components/theme'

export default function Subscribe() {
	return (
		<>
    <Head>
				<title>Se inscreva na newsletter</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div className="top">
				<TopImage />
			</div>
			<div
				dangerouslySetInnerHTML={{
					__html: `<!-- Begin Sendinblue Form -->
<!-- START - We recommend to place the below code in head tag of your website html  -->
<style>
  #sib-container input:-ms-input-placeholder {
    text-align: left;
    color: #c0ccda;
  }

  #sib-container input::placeholder {
    text-align: left;
    color: #c0ccda;
  }

  #sib-container textarea::placeholder {
    text-align: left;
    color: #c0ccda;
  }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<!--  END - We recommend to place the above code in head tag of your website html -->

<!-- START - We recommend to place the below code where you want the form in your website html  -->
<div class="sib-form" style="text-align: center;
         background-color: #1caab4;                                 ">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"
          />
        </svg>
        <span class="sib-form-message-panel__inner-text">
                          Sua assinatura não pôde ser validada.
                      </span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
          />
        </svg>
        <span class="sib-form-message-panel__inner-text">
                          Você fez sua assinatura com sucesso.
                      </span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(234,234,234,1); max-width:540px; border-radius:10px; border-width:0px; border-color:#C0CCD9; border-style:solid;">
      <form id="sib-form" method="POST" action="https://7e168e21.sibforms.com/serve/MUIEAPbsgWkV4ynQlW3zNdwtOPF7J-DGT3pyyDthiEYuYsAdUAa2pUvG1ZlrLcaciK0dnhU-KYkO4O707cbJZ-kRxKLXlXkcWQGMpLAGutzu0hjVzE1M0q1z4OqGiqwucChsQXti8fNxxaSQ7-bYz9pHKSDI-cRuG__YLiq9qUdb-cGZ0GmwtOBNOi7HmZrJwRtk_2hl3eOamZkh"
        data-type="subscription">
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:32px; text-align:left; font-weight:700; color:#3C4858; background-color:transparent;">
            <p>Newsletter Guaiamus</p>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:16px; text-align:left; color:#3C4858; background-color:transparent;">
            <div class="sib-text-form-block">
              <p>Se informe das tecnologias de saúde, tire dúvidas sobre exames e tenha mais conforto nos próximos atendimentos</p>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-size:16px; text-align:left; font-weight:700; color:#3c4858;" for="EMAIL" data-required="*">
                  Insira seu e-mail para fazer sua assinatura
                </label>

                <div class="entry__field">
                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
              <label class="entry__specification" style="font-size:12px; text-align:left; color:#8390A4;">
                Forneça seu e-mail para assinar. Por exemplo: abc@xyz.com
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-optin sib-form-block">
            <div class="form__entry entry_mcq">
              <div class="form__label-row ">
                <div class="entry__choice">
                  <label>
                    <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" />
                    <span class="checkbox checkbox_tick_positive"></span><span style="font-size:14px; text-align:left; color:#3C4858; background-color:transparent;"><p>Eu concordo em receber seus boletins informativos e com os termos e condições.</p></span>                    </label>
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
              <label class="entry__specification" style="font-size:12px; text-align:left; color:#8390A4;">
                Você pode cancelar a assinatura a qualquer momento usando o link em nossa newsletter.
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form__declaration">
            <div class="declaration-block-icon">
              <svg class="icon__SVG" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <symbol id="svgIcon-sphere" viewBox="0 0 63 63">
                    <path class="path1" d="M31.54 0l1.05 3.06 3.385-.01-2.735 1.897 1.05 3.042-2.748-1.886-2.738 1.886 1.044-3.05-2.745-1.897h3.393zm13.97 3.019L46.555 6.4l3.384.01-2.743 2.101 1.048 3.387-2.752-2.1-2.752 2.1 1.054-3.382-2.745-2.105h3.385zm9.998 10.056l1.039 3.382h3.38l-2.751 2.1 1.05 3.382-2.744-2.091-2.743 2.091 1.054-3.381-2.754-2.1h3.385zM58.58 27.1l1.04 3.372h3.379l-2.752 2.096 1.05 3.387-2.744-2.091-2.75 2.092 1.054-3.387-2.747-2.097h3.376zm-3.076 14.02l1.044 3.364h3.385l-2.743 2.09 1.05 3.392-2.744-2.097-2.743 2.097 1.052-3.377-2.752-2.117 3.385-.01zm-9.985 9.91l1.045 3.364h3.393l-2.752 2.09 1.05 3.393-2.745-2.097-2.743 2.097 1.05-3.383-2.751-2.1 3.384-.01zM31.45 55.01l1.044 3.043 3.393-.008-2.752 1.9L34.19 63l-2.744-1.895-2.748 1.891 1.054-3.05-2.743-1.9h3.384zm-13.934-3.98l1.036 3.364h3.402l-2.752 2.09 1.053 3.393-2.747-2.097-2.752 2.097 1.053-3.382-2.743-2.1 3.384-.01zm-9.981-9.91l1.045 3.364h3.398l-2.748 2.09 1.05 3.392-2.753-2.1-2.752 2.096 1.053-3.382-2.743-2.102 3.384-.009zM4.466 27.1l1.038 3.372H8.88l-2.752 2.097 1.053 3.387-2.743-2.09-2.748 2.09 1.053-3.387L0 30.472h3.385zm3.069-14.025l1.045 3.382h3.395L9.23 18.56l1.05 3.381-2.752-2.09-2.752 2.09 1.053-3.381-2.744-2.1h3.384zm9.99-10.056L18.57 6.4l3.393.01-2.743 2.1 1.05 3.373-2.754-2.092-2.751 2.092 1.053-3.382-2.744-2.1h3.384zm24.938 19.394l-10-4.22a2.48 2.48 0 00-1.921 0l-10 4.22A2.529 2.529 0 0019 24.75c0 10.47 5.964 17.705 11.537 20.057a2.48 2.48 0 001.921 0C36.921 42.924 44 36.421 44 24.75a2.532 2.532 0 00-1.537-2.336zm-2.46 6.023l-9.583 9.705a.83.83 0 01-1.177 0l-5.416-5.485a.855.855 0 010-1.192l1.177-1.192a.83.83 0 011.177 0l3.65 3.697 7.819-7.916a.83.83 0 011.177 0l1.177 1.191a.843.843 0 010 1.192z"
                      fill="#0092FF"></path>
                  </symbol>
                </defs>
              </svg>
              <svg class="svgIcon-sphere" style="width:63px; height:63px;">
                <use xlink:href="#svgIcon-sphere"></use>
              </svg>
            </div>
            <p style="font-size:14px; text-align:left; color:#687484; background-color:transparent;">
              Usamos a Sendinblue como nossa plataforma de marketing. Ao clicar abaixo para enviar este formulário, você reconhece que as informações fornecidas por você serão transferidas para a Sendinblue para processamento, de acordo com o
              <a target="_blank"
                class="clickable_link" href="https://pt.sendinblue.com/legal/termsofuse/">termos de uso</a> deles
            </p>
          </div>

        </div>
        <div style="padding: 8px 0;">
          <div class="sib-captcha sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <script>
                  function handleCaptchaResponse() {
                    var event = new Event('captchaChange');
                    document.getElementById('sib-captcha').dispatchEvent(event);
                  }
                </script>
                <div class="g-recaptcha sib-visible-recaptcha" id="sib-captcha" data-sitekey="6LdlsbwZAAAAACQlHRN2V8hFktQpc1SvaRd1BVe5" data-callback="handleCaptchaResponse"></div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:left; font-weight:700; color:#FFFFFF; background-color:#3E4857; border-radius:5px; border-width:0px;"
              form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                />
              </svg>
              ASSINAR
            </button>
          </div>
        </div>

        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="pt">
      </form>
    </div>
  </div>
</div>
<!-- END - We recommend to place the below code where you want the form in your website html  -->

<!-- START - We recommend to place the below code in footer or bottom of your website html  -->
<script>
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Escolha um código de país';

  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "A informação fornecida não é valida. Verifique o formato do campo e tente novamente.";

  window.REQUIRED_ERROR_MESSAGE = "Este campo não pode ser deixado em branco. ";

  window.GENERIC_INVALID_MESSAGE = "A informação fornecida não é valida. Verifique o formato do campo e tente novamente.";




  window.translation = {
    common: {
      selectedList: '{quantity} lista selecionada',
      selectedLists: '{quantity} listas selecionadas'
    }
  };

  var AUTOHIDE = Boolean(1);
</script>
<script src="https://sibforms.com/forms/end-form/build/main.js">
</script>

<script src="https://www.google.com/recaptcha/api.js?hl=pt"></script>

<!-- END - We recommend to place the above code in footer or bottom of your website html  -->
<!-- End Sendinblue Form -->`,
				}}
			></div>


      <style jsx>{`
        .top {
          background-color: ${theme.colors.baseGreen};
          padding: 20px 40px;
          color: white;
          display: flex;
          flex-direction: row;
        }

        @media (max-width: 714px) {
					.top {
						align-items: center;
						text-align: center;
            justify-content: center;
					}
				}
      `}</style>
		</>
	)
}
