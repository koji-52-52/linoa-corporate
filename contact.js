const form = document.querySelector('#contact-form');

if (form) {
  const requiredFields = [['company', '会社名を入力してください。'], ['name', 'お名前を入力してください。'], ['service', 'ご相談内容を選択してください。'], ['message', 'ご相談・お問い合わせ内容を入力してください。']];
  const setError = (field, message = '') => {
    document.querySelector(`#${field}`).setAttribute('aria-invalid', String(Boolean(message)));
    document.querySelector(`#${field}-error`).textContent = message;
  };
  const validate = () => {
    let firstInvalid = null;
    requiredFields.forEach(([field, message]) => {
      const input = document.querySelector(`#${field}`);
      const error = input.value.trim() ? '' : message;
      setError(field, error);
      if (error && !firstInvalid) firstInvalid = input;
    });
    const email = document.querySelector('#email');
    const emailError = !email.value.trim() ? 'メールアドレスを入力してください。' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? 'メールアドレスの形式を確認してください。' : '';
    setError('email', emailError);
    return firstInvalid || (emailError ? email : null);
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstInvalid = validate();
    if (firstInvalid) { firstInvalid.focus(); return; }
    form.hidden = true;
    const complete = document.querySelector('#contact-complete');
    complete.hidden = false;
    complete.querySelector('h2').focus();
  });
  form.querySelectorAll('input, select, textarea').forEach((input) => input.addEventListener('input', () => {
    if (input.getAttribute('aria-invalid') === 'true') validate();
  }));
}
