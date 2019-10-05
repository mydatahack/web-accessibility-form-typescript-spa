import {
  FORM_TITLE_ACCESSIBLE,
  FORM_TITLE,
  FORM_SUBTITLE
} from './constantValues';

export const ACCESIBLE_FORM_HTML = `<form class="example-form-accessible" id="example-form">
<h4>${FORM_TITLE}</h4>
<p>*${FORM_TITLE_ACCESSIBLE} - ${FORM_SUBTITLE}</p>
<div class="input-field">
  <label class="form-label" for="title">Title</label>
  <select id="title" class="form-input" name="title" required aria-required="true">
    <optgroup>
    <option value="">Select your title</option>
    </optgroup>
    <option value="Dr">Dr</option>
    <option value="Master">Master</option>
    <option value="Ms">Ms</option>
    <option value="Mrs">Mrs</option>
    <option value="Mr">Mr</option>
    <option value="Mx">Mx</option>
    <option value="Other">Other</option>
  </select>
</div>

<div class="input-field">
  <label class="form-label" for="firstname">First name</label>
  <input type="text" class="form-input" id="firstname" name="firstname" required aria-required="true" placeholder="Enter your first name" />
</div>

<div class="input-field">
  <label class="form-label" for="lastname">Last name</label>
  <input type="text" class="form-input" id="lastname" name="lastname" required aria-required="true" placeholder="Enter your last name" />
</div>

<div class="input-field">
  <label class="form-label" for="email">Email</label>
  <input type="email" class="form-input" id="email" name="email" required aria-required="true" placeholder="Enter your email" />
</div>

<div class="input-field">
  <label class="form-label" for="phone">Phone</label>
  <input type="text" class="form-input" id="phone" name="phone" required aria-required="true" placeholder="Enter your phone number" />
</div>

<fieldset class="input-field" role="radiogroup" tabindex=0 >
  <legend class="form-label">Venue Location</legend>
  <div class="radio-button-container">
    <div class="radio-button-group" tabindex=0>
      <input type="radio" class="radio-input" id="sydney" name="venue" value="Sydney" required aria-required="true" />
      <label class="radio-label" for="sydney">
        <span class="ph-tick"></span>
        Sydney
      </label>
    </div>
    <div class="radio-button-group" tabindex=0>
      <input type="radio" class="radio-input" id="melbourne" name="venue" value="melbourne" />
      <label class="radio-label" for="melbourne">
        <span class="ph-tick"></span>
        Melbourne
      </label>
    </div>
    <div class="radio-button-group" tabindex=0>
      <input type="radio" class="radio-input" id="adelaide" name="venue" value="adelaide" />
      <label class="radio-label" for="adelaide">
        <span class="ph-tick"></span>
        Adelaide
      </label>
    </div>
    <div class="radio-button-group" tabindex=0>
      <input type="radio" class="radio-input" id="brisbane" name="venue" value="brisbane"/>
      <label class="radio-label" for="brisbane">
        <span class="ph-tick"></span>
        Brisbane
      </label>
    </div>
    <div class="radio-button-group" tabindex=0>
      <input type="radio" class="radio-input" id="perth" name="venue" value="perth"/>
      <label class="radio-label" for="perth">
        <span class="ph-tick"></span>
        Perth
      </label>
    </div>
    <div class="radio-button-group" tabindex=0>
      <input type="radio" class="radio-input" id="goldcoast" name="venue" value="goldcoast" />
      <label class="radio-label" for="goldcoast">
        <span class="ph-tick"></span>
        Gold Coast
      </label>
    </div>
  </div>
</fieldset>

<div class="input-field">
  <label class="form-label" for="tellus">Tell us about yourself</label>
  <textarea class="form-input-textarea" id="tellus" name="tellus" row = "10" placeholder="Go for it..."></textarea>
</div>

<fieldset class="input-field">
  <legend class="checkbox-title">Subscribe to our news letter</legend>
  <div class="checkbox-group" tabindex=0>
    <input type="checkbox" class="radio-input" id="subscribe" name="subscribe"/>
    <label class="radio-label" for="subscribe">
      <span class="ph-tick"></span>
      Subscribe
    </label>
  </div>
</fieldset>
<button type="submit" class="submit-btn">Submit</button>
</form>`;
