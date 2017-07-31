class Order
  attr_reader :date, :customerid, :value
  
  def initialize(args = {})
    args.each do |k,v|
      instance_variable_set("@#{k}", v) unless v.nil?
    end
  end
end
