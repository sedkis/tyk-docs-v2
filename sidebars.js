module.exports = {
  sidebar: [
    {
      type: 'doc',
      id: 'overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/adding-your-first-api',
        'getting-started/creating-your-first-auth-token',
        'getting-started/adding-your-first-plugin',
        {
          type: 'category',
          label: 'Other Install Methods',
          items: [
            'getting-started/other-install-methods/docker',
            'getting-started/other-install-methods/kubernetes',
            'getting-started/other-install-methods/amazon-linux',
            'getting-started/other-install-methods/red-hat-enterprise-linux',
            'getting-started/other-install-methods/centos',
            'getting-started/other-install-methods/ubuntu',
            'getting-started/other-install-methods/debian',
            'getting-started/other-install-methods/github',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'API Versioning',
          items: [
          ],
        },
        {
          type: 'category',
          label: 'Traffic Control',
          items: [
            {
              type: 'category',
              label: 'Rate Limiting',
              items: [
              ],
            },
            {
              type: 'category',
              label: 'Request Throttling',
              items: [
              ],
            },
            {
              type: 'category',
              label: 'Request Quotes',
              items: [
              ],
            },
            {
              type: 'category',
              label: 'Request Size Limits',
              items: [
              ],
            },
            {
              type: 'category',
              label: 'Key Expiry',
              items: [
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Latency Control',
          items: [
            {
              type: 'category',
              label: 'Caching',
              items: [
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Events',
          items: [
            {
              type: 'category',
              label: 'Webhooks',
              items: [
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Security',
          items: [
            {
              type: 'category',
              label: 'Authentication & Authorization',
              items: [
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Request Transformation',
          items: [
          ],
        },
        {
          type: 'category',
          label: 'Protocols',
          items: [
            {
              type: 'category',
              label: 'HTTP1/2',
              items: [
              ],
            },
            {
              type: 'category',
              label: 'TCP',
              items: [
              ],
            },
            {
              type: 'category',
              label: 'gRPC',
              items: [
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/tyk.conf',
        'configuration/planning-for-prod',
      ],
    },
    {
      type: 'category',
      label: 'Key Concepts',
      items: [
        'key-concepts/api-definition-object',
        'key-concepts/session-object',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Features',
      items: [
        {
          type: 'category',
          label: 'Looping',
          items: [
          ],
        },
        {
          type: 'category',
          label: 'Universal Data Graph',
          items: [
          ],
        },
        {
          type: 'category',
          label: 'GraphQL',
          items: [
          ],
        },
        {
          type: 'category',
          label: 'Custom Plugins',
          items: [
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'support/licensing',
        'support/faq',
        'support/troubleshooting',
        'support/upgrade-tyk',
        'support/release-notes',
      ],
    },
  ],
};
