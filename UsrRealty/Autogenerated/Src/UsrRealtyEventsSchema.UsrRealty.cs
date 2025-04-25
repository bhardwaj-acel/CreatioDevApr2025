namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("149b1076-6795-470d-bd06-b121de37356f");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("203407cf-0016-494e-a18c-a30fa6230235");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,7,242,31,6,209,131,4,102,73,174,117,106,136,141,83,2,161,45,177,146,75,201,97,189,26,43,27,246,67,236,172,156,186,33,255,189,187,90,185,118,164,4,50,23,105,103,222,188,121,111,24,195,53,82,195,5,66,137,206,113,178,27,207,22,214,108,100,221,58,238,165,53,167,39,47,167,39,0,208,146,52,53,172,118,228,81,79,187,76,159,58,238,211,218,154,15,139,14,217,210,120,233,37,210,103,48,108,185,69,227,247,208,223,93,122,215,229,110,100,16,97,208,229,43,241,136,154,255,8,22,224,27,100,119,228,110,145,43,191,203,138,135,212,212,180,107,37,5,8,197,137,32,213,222,161,129,175,48,231,132,239,84,18,75,242,15,71,132,118,27,36,203,10,97,107,101,5,63,205,138,111,131,145,220,174,159,80,120,32,52,21,186,9,36,194,57,110,130,171,142,246,210,213,4,88,28,232,142,152,99,172,131,10,246,159,109,79,131,197,244,45,44,241,130,235,252,4,227,121,74,20,169,97,0,174,80,72,205,21,52,78,138,184,165,212,197,190,163,47,119,13,86,11,171,90,109,238,185,106,241,162,135,206,242,184,201,95,17,159,13,71,203,13,228,137,105,6,231,103,251,40,222,130,6,174,98,32,187,166,5,55,2,21,86,65,132,119,45,78,199,40,242,46,222,67,56,72,226,53,150,168,27,197,125,20,109,240,25,110,172,224,74,254,229,107,133,171,14,151,247,86,238,8,93,184,88,19,86,31,206,149,221,34,217,214,137,0,178,46,176,76,96,60,39,198,225,90,210,153,101,19,200,70,35,136,117,155,185,166,210,218,185,172,211,43,43,88,105,123,9,195,253,140,93,4,245,41,193,174,172,211,220,231,3,119,97,236,57,59,155,127,25,173,58,134,127,116,246,185,115,191,252,35,176,137,254,246,253,67,248,235,225,217,255,134,207,235,63,7,50,184,145,222,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValuesTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValuesTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("c5747ebe-7b75-ce22-3a86-c3c0c48da531"),
				Name = "ValuesTooBig",
				CreatedInPackageId = new Guid("203407cf-0016-494e-a18c-a30fa6230235"),
				CreatedInSchemaUId = new Guid("149b1076-6795-470d-bd06-b121de37356f"),
				ModifiedInSchemaUId = new Guid("149b1076-6795-470d-bd06-b121de37356f")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("149b1076-6795-470d-bd06-b121de37356f"));
		}

		#endregion

	}

	#endregion

}

