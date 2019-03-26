import { mapActions } from 'vuex'
import auth from '../utils/auth'

export default {
  methods: {
    ...mapActions({
      resetState: 'resetState'
    }),
    addLog ({ method, model, body } = {}) {
      this.$store.dispatch('logs/post', {
        body: {
          managerId: auth.get()['user'].id,
          alias: 'logs',
          method,
          model,
          body
        }
      })
    }
  }
}
