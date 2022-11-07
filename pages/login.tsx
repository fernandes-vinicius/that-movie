import { FormEvent, useState } from 'react';
import { NextPage } from 'next';
import { ArrowLeft, EnvelopeSimple } from 'phosphor-react';
import { toast } from 'react-toastify';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { isValidEmail } from 'utils/validation';

import Page from 'components/Page';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Link from 'components/Link';

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isSUbmitting, setIsSUbmitting] = useState(false);

  const supabaseClient = useSupabaseClient();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    //* email validation
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setIsSUbmitting(true);

    const { error } = await supabaseClient.auth.signInWithOtp({ email });
    setIsSUbmitting(false);

    if (error) toast.error(error.message);
    else toast.success(`Check your email. We enailed a magic link to ${email}`);
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setEmailError(!isValidEmail(email));
  };

  return (
    <Page title="Sign In" description="Sign In to access your watchlist" path="/login">
      <Container disabledPadding maxWidth="sm">
        <main className="flex flex-col gap-10">
          <header>
            <Heading size="lg" className="mb-4">
              Sign In
            </Heading>

            <Text asChild size="sm" className="text-gray-300">
              <p>
                Enter your email address to continue... We will send you an email with a magic link that will be used to
                log in.
              </p>
            </Text>
          </header>

          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label htmlFor="email">
              <Text size="sm" className="block mb-3 text-gray-300">
                Email address
              </Text>
              <TextInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="Your email address"
                error={!!emailError}
                icon={<EnvelopeSimple />}
                autoFocus
              />
              {emailError && (
                <Text size="sm" className={'block mt-3 text-accent-red'}>
                  Please enter a valid email address
                </Text>
              )}
            </label>

            <Button type="submit" loading={isSUbmitting}>
              Send Magic Link
            </Button>
          </form>

          <footer className="flex justify-center items-center">
            <Link href="/">
              <Text size="sm" className="flex items-center gap-4 text-gray-300 transition hover:text-white">
                <ArrowLeft weight="bold" />
                <span>Back to Home</span>
              </Text>
            </Link>
          </footer>
        </main>
      </Container>
    </Page>
  );
};

export default LoginPage;
