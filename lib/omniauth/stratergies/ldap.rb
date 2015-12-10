require 'omniauth'

module OmniAuth
  module Strategies
    class LDAP
      include OmniAuth::Strategy
      
      option :form_id, 'ldap-form'
      option :form_class, 'f-container'

      def callback_phase
        @adaptor = OmniAuth::LDAP::Adaptor.new @options
        fail "Missing Credentials" if missing_credentials? #Hack for the JS
        @ldap_user_info = @adaptor.bind_as(:filter => Net::LDAP::Filter.eq(@adaptor.uid, @options[:name_proc].call(request['username'])),:size => 1, :password => request['password'])
        fail "Invalid Credentials" if !@ldap_user_info #Hack for the JS
        @user_info = self.class.map_user(@@config, @ldap_user_info)
        super
      end

    end
  end
end

OmniAuth.config.add_camelization 'ldap', 'LDAP'