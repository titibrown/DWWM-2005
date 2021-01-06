using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace ClassLibraryInterfaceBusinessDatabase
{
    public struct StructSupplier
    {
        #region ############### CONSTRUCTOR ###############
        public StructSupplier(int _id, string _name, string _address, string _zipcode, string _city, string _contactName, byte _satisfaction)
        {
            Id = _id;
            Name = _name;
            Address = _address;
            ZipCode = _zipcode;
            City = _city;
            ContactName = _contactName;
            Satisfaction = _satisfaction;
        }
        public StructSupplier()
        {
            Id = 0;
            Name = "undefined";
            Address = "undefined";
            ZipCode = "undefined";
            City = "undefined";
            ContactName = null;
            Satisfaction = 0;
        }
        #endregion
        #region ############### PROPERTIES ###############
        public int Id
        {
            get; private set;
        }
        public string Name
        {
            get; private set;
        }
        public string Address
        {
            get; private set;
        }
        public string ZipCode
        {
            get; private set;
        }
        public string City
        {
            get; private set;
        }
        public string ContactName
        {
            get; private set;
        }
        public byte Satisfaction
        {
            get; private set;
        }
        #endregion
    }
}