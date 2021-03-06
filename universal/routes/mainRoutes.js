import { renderBasic, renderSlim } from './helpers.js';

export default function (FlowRouter) {
  FlowRouter.route('/', {
    action: () => renderBasic('home')
  });

  FlowRouter.route('/concepts', {
    action: () => renderSlim('concepts'),
    subscriptions: function() {
      this.register('Concepts', Meteor.subscribe('Concepts'));
      this.register('Edges', Meteor.subscribe('Edges'));
    }
  });

  FlowRouter.route('/concepts/new', {
    action: () => renderSlim('conceptsNew'),
    subscriptions: function() {
      this.register('Concepts', Meteor.subscribe('Concepts'));
      this.register('Edges', Meteor.subscribe('Edges'));
    }
  });

  FlowRouter.route('/concepts/delete', {
    action: () => renderSlim('conceptsDelete'),
    subscriptions: function() {
      this.register('Concepts', Meteor.subscribe('Concepts'));
      this.register('Edges', Meteor.subscribe('Edges'));
    }
  });

  FlowRouter.notFound = {
    action: () => renderSlim('notFound')
  };
}
