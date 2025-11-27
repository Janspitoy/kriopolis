export default ({ env }) => ({
    email: {
        config: {
            provider: '@strapi/provider-email-nodemailer',
            providerOptions: {
                host: env('SMTP_HOST'),
                port: env.int('SMTP_PORT', 465),
                secure: true, // true for 465, false for others
                auth: {
                    user: env('SMTP_USER'),
                    pass: env('SMTP_PASS'),
                },
            },
            settings: {
                defaultFrom: env('SMTP_USER'),
                defaultReplyTo: env('SMTP_USER'),
            },
        },
    },
});
