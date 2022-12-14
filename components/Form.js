
const Form = () => {

    return (
     <div className="md:mt-4 mt-14 mx-auto md:w-2/4 px-5 mb-10">
        <h2 className="text-left md:text-5xl text-4xl font-bold mb-8 text-[#FDEA03]"> Tunaahidi nini? Zaidi ya likes za Face book, usimamizi wa kimkakati wa mitandao yako ya kijamii! </h2> 
        <h3 className="text-left mb-4">Jaza sehemu zilizo hapa chini ili kupata habari unayotaka bila malipo</h3>

            <div id="mlb2-5795111" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5795111">
                    <div className="ml-form-align-center">
                        <div className="ml-form-embedWrapper embedForm">
                        <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                            <div className="ml-form-embedContent" style={{marginBottom:0}}></div>
                            <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/d6m8v4" data-code="d6m8v4" method="post" target="_blank">
                            <div className="ml-form-formContent">
                                <div class="ml-form-fieldRow">
                                    <div class="ml-field-group ml-field-name ml-validate-required">
                                        <input aria-label="name" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[name]" placeholder="Jina" autocomplete="name" />
                                    </div>
                                </div>
                                <div className="ml-form-fieldRow">
                                <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                    <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Barua pepe" autoComplete="email" />
                                </div>
                                </div>
                                <div class="ml-form-fieldRow">
                                <div class="ml-field-group ml-field-phone ml-validate-required">
                                    <input aria-label="phone" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[phone]" placeholder="Simu" autocomplete="" />
                                </div>
                                </div>
                                <div className="ml-form-fieldRow ml-last-item">
                                <div className="ml-field-group ml-field-company">
                                    <input aria-label="company" type="text" className="form-control" data-inputmask="" name="fields[company]" placeholder="Kampuni" autoComplete="" />
                                </div>
                                </div>
                            </div>
                            <input type="hidden" name="ml-submit" value="1" />
                            <div className="ml-form-embedSubmit">
                                <button type="submit" className="primary">Submit</button>
                                <button disabled="disabled" style={{display:'none'}} type="button" className="loading"> <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span> </button>
                            </div>
                            <input type="hidden" name="anticsrf" value="true" />
                            </form>
                        </div>
                        <div className="ml-form-successBody row-success" style={{display:'none'}}>
                            <div className="ml-form-successContent">
                                <h4>Thank you!</h4>
                                <p>We will send your proposal as soon as possible.</p>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>

    </div>

    );
}

export default Form;